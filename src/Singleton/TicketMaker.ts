export class TicketMaker {
    private static ticketNumber: number = 1000;
    private constructor() {
    }

    public static getNextTicketNumber(): number {
        return this.ticketNumber++;
    }
}