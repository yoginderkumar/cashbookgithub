export default (initials) => {
    let RANDOM_COLOR_LIST = [
        'rgba(252, 92, 101,1.0)',
        'rgba(75, 123, 236,1.0)',
        'rgba(32, 191, 107,1.0)',
        'rgba(38, 222, 129,1.0)',
        'rgba(247, 183, 49,1.0)',
        'rgba(69, 170, 242,1.0)',
        'rgba(165, 94, 234,1.0)',
        'rgba(56, 103, 214,1.0)',
        'rgb(82, 76, 146)'
    ], color = ''

    switch (initials) {
        case 'A':
        case 'B':
        case 'C':
            color = RANDOM_COLOR_LIST[0]
            break;
        case 'D':
            color = RANDOM_COLOR_LIST[8]
            break;
        case 'E':
        case 'F':
        case 'G':
        case 'H':
            color = RANDOM_COLOR_LIST[4]
            break;
        case 'I':
        case 'J':
        case 'K':
        case 'L':
            color = RANDOM_COLOR_LIST[7]
            break;
        case 'M':
        case 'N':
        case 'O':
        case 'P':
            color = RANDOM_COLOR_LIST[5]
            break;
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
            color = RANDOM_COLOR_LIST[2]
            break;
        case 'U':
        case 'V':
        case 'W':
        case 'X':
            color = RANDOM_COLOR_LIST[1]
            break;
        case 'Y':
        case 'Z':
            color = RANDOM_COLOR_LIST[3]
            break;
        default:
            color = RANDOM_COLOR_LIST[1]
            break;
    }

    return color;
}