
export const formatDate = (timeStamp) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(timeStamp?.toDate());
    const messageDate = `${date.getDate()}`.padStart(2, '0');
    const messageMonth = months[date.getMonth() + 1];
    const messageYear = date.getFullYear();
    const messageHours = `${date.getHours() % 12 || 12}`.padStart(2, '0')
    const messageMinutes = `${date.getMinutes()}`.padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${messageMonth}, ${messageDate} ${messageYear} ${messageHours}:${messageMinutes} ${ampm}`;
};
