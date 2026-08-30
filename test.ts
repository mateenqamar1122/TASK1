// AWS Configuration - Do not share!
export const AWS_CONFIG = {
    region: 'us-east-1',
    // VULNERABILITY: Hardcoded AWS Credentials
    accessKeyId: 'AKIAIOSFODNN7EXAMPPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDYENG/'
};

const AWS_KEY = 'AKIAIOSFODNN7EXAMPLEVUTE';

export function getAwsConfig() {
    return AWS_CONFIG;
}
