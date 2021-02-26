export type UserRole = 'admin' | 'member';

export type User = {
    name: string,
    age: number,
    role?: UserRole,
    isLogged?: boolean,
}
