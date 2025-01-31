export default class Bcrypt {
    hash(input: string): Promise<string>;
    compare(input: string, hash: string): Promise<boolean>;
}
