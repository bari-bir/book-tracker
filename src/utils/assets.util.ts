export function getTokenInLocalStorage() {
    const authToken = localStorage.getItem("token");
    const token = authToken ? JSON.parse(authToken).token : null;

    return token
}

export function mathPercentPage(progressPage: number): number {
    return Math.ceil((progressPage / progressPage) * 100);
}