export class TicketMaker {
    private ticketNumber: number = 1000;

    public getNextTicketNumber(): number {
        return this.ticketNumber++;
    }
}