export default function geratePass(){

    let password: string = ''
    let characters: string = 'Aa@1234567890BbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!#$%¨&*()_+'
    let passWordLength = 12

    for ( let index =0; index < passWordLength; index++ ){

        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )

    }


    return password

}