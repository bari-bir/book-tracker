export function getTokenInLocalStorage() {
    const authToken = localStorage.getItem("token");
    const token = authToken ? JSON.parse(authToken).token : null;

    return token
}

export function mathPercentPage(progressPage: number): number {
    return Math.ceil((progressPage / progressPage) * 100);
}

export function expcliText(text: string) {
    if (text.length >= 40) {
        return `${text.slice(0, 35)}....`
    }

    return text
} 