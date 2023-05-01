export default function nameFormatting(name: string) {
    const upperLetters = ['(','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','T','Z']

    let updatedName = name[0]

    for (let i = 1; i < name.length; i++) {
        const letter = name[i]
        const beforeChar = name[i - 1]

        if(upperLetters.includes(letter) && beforeChar !== '(') {
            updatedName = updatedName + "<wbr />" + letter
        } else {
            updatedName = updatedName + letter
        }
    }

    return updatedName
}