export const logger = (message) => {

    const now = new Date();
    const dateStr = now.toLocaleDateString(); // format: MM/DD/YYYY
    const timeStr = now.toLocaleTimeString(); // format: HH:MM:SS AM/PM

    console.log(`*-- ${message} --*, ${dateStr}/${timeStr} `);

}