import {AppTokenAuthProvider} from '@twurple/auth';
import {ApiClient} from '@twurple/api';
import { twitch_app, twitch_key } from '../config.js';

const auth=new AppTokenAuthProvider(twitch_app, twitch_key,{});
export var api= new ApiClient({authProvider:auth});