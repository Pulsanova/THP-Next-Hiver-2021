/* eslint-disable @typescript-eslint/no-unused-vars */

import { User, UserRole } from 'types/models.d';

const firstName: string = 'Polo';
const age: number = 39;
const isDev: boolean = true;

let hello: "hello" | "bonjour" | null = null;
hello = "bonjour";

// - Array

type UserName = 'Jean' | 'Louis';

const users: UserName[] = ['Jean', 'Louis'];

// - Objects

const myUser: User = { name: 'Polo', age: 39, role: 'admin', isLogged: false };

myUser.name = 'Paul';

// - Fonctions

type GetNumberType = (role: UserRole) => number;

const getNumber: GetNumberType = (role) => {
    if (role === 'admin') {
        return 15;
    }
    // - 300 lignes plus loin
    return 1;
}
