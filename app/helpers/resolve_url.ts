// helper function for resolving the host name and protocol for API URLs
const resolveURL = () => {
    const { PORT, NODE_ENV, VERCEL_URL } = process.env;

    if (NODE_ENV === 'production') {
        return `https://${VERCEL_URL}`;
    }

    return `http://localhost:${PORT}`;
};

export default resolveURL;