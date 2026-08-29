// AWS Configuration - Do not share!
export const AWS_CONFIG = {
    region: 'us-east-1',
    // VULNERABILITY: Hardcoded AWS Credentials
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEEL'
};

const AWS_KEY = 'AKIAIOSFODNN7EXAMPLEVUE';

export function getAwsConfig() {
    return AWS_CONFIG;
}
