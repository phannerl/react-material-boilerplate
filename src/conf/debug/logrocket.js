import * as LogRocket from 'logrocket';
import * as setupLogRocketReact from 'logrocket-react';
const appName = 'otk1d8/react-ts-boilderplate';
LogRocket.init(appName);
// after calling LogRocket.init()
setupLogRocketReact(LogRocket);
export const registerUserLogger = (user) => {
    LogRocket.identify(user.id, {
        ...user,
        // Add your own custom user variables here, ie:
        subscriptionType: 'pro',
    });
};
