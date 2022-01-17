const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const salt = 10;
import { GraphQLID, GraphQLString } from 'graphql'
import {UserType} from '../TypeDefs/User'
import {Users} from '../../Entities/Users'
import {MessagesType} from '../TypeDefs/Messages'

export const CREATE_USER = {
    type: MessagesType,
    args:{
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    },
    async resolve(parent: any, args: any){
        let {name, username, password} =args;        
        password = bcrypt.hashSync(password, salt);
        const user = await Users.findOne({username: username})        
        if(user){
            throw new Error("USERNAME EXIST!")
        }else{
            await Users.insert({name, username, password});
            return {successful: true, message: "PASSWORD OK"};
        }
       
    }
}

export const UPDATE_PASSWORD = {
    type: MessagesType,
    args:{
        username: {type: GraphQLString},
        oldPassword: {type: GraphQLString},
        newPassword: {type: GraphQLString}
    },
    async resolve(parent: any, args: any){
        let {username, oldPassword, newPassword} = args;
        newPassword = bcrypt.hashSync(newPassword, salt);
        const user = await Users.findOne({username: username})
        const userPassword = user?.password;
        if(!user){
            throw new Error("USERNAME DOESNT EXIST!")
        }
        if(bcrypt.compareSync(oldPassword, userPassword)){
            await Users.update({username:username}, {password: newPassword})
            return {successful: true, message: "PASSWORD UPDATED"};

        }else{
            throw new Error("PASSWORDS DO NOT MATCH!")
        }
    }
}

export const DELETE_USER= {
    type: MessagesType,
    args:{
        id: {type: GraphQLID}
    },
    async resolve(parent: any, args: any){
        const id  = args.id;
        await Users.delete(id);
        return {successful: true, message: "DELETED SUCCESS"};
       
    }
}

export const LOGIN = {
    type: MessagesType,
    args:{
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    },

    async resolve(parent: any, args: any){    
        const {username, password} =args;    
        try {
            const user = await Users.findOne({ where: {username}})
            if (!user) {
                //throw new Error('No user with that username..')
                return {successful: false, message: "No user with that username.."};
            }
            const isValid = await bcrypt.compareSync(password, user.password);
            if (!isValid) {
                //throw new Error('Incorrect password')
                return {successful: false, message: "Incorrect password"};
            }

            // return jwt
            const token = jsonwebtoken.sign(
                { userId: user.id, username: user.username},
                process.env.JWT_SECRET,
                { expiresIn: '1d'}
            )
            return {successful: true, message: "PASSWORD OK", user: user.id, token:token};
            
        } catch (ex) {
            console.error("outer", ex);
        }
    
    }
}


