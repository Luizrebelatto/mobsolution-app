export interface ITextInput {
    placeholder: string;
    title?: string;
    keyBoardType: 'email-address' | 'default';
    value: string;
    onChangeText: any
}