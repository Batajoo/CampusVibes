import {Client, Account, ID} from "appwrite";
import conf from "../conf/conf"

export class Auth{
    client = new Client();
    account;

    constructor(){
        this.client = this.client.setProject(conf.appwriteProjectID);
        this.account = new Account(client);
    };

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                // call login function 
            } else {
                return userAccount;
            }
        } catch(error){
            console.log(`Appwrite Auth Error: createAccount :: ${error}`);
        }
    }

    async login({email, password}){
        try{
            const loginSession = this.account.createEmailPasswordSession(email, password);
            return loginSession;
        } catch(error){
            console.log(`Appwrite Auth Error: login :: ${error}`);
        }
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        } catch(error){
            console.log(`Appwrite Auth Error: logout :: ${error}`);
        }
    }

    async getCurrentAccount(){
        try{
            return this.account.get();
        }catch(error){
            console.log(`Appwrite Auth Error: getCurrentAccount :: ${error}`)
        }
    }
};

const auth = new Auth();

export default auth;