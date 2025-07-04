
import 'dotenv/config';

export default {
    expo: {
        name: 'goFinances',
        slug: 'goFinances',
        version: '1.0.0',
        plugins: ['expo-font'],
        extra: {
            API_URL: process.env.API_URL,
        },
    },
};