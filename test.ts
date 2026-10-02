// AWS Configuration - Do not share!
export const AWS_CONFIG = {
    region: 'us-east-1',
    // VULNERABILITY: Hardcoded AWS Credentials
    accessKeyId: 'AKIAIOSFODNN7EXAMPPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDYEfDPhLG',
    const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnbHV0dGFpeGtpbHViYnNpbW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2ODg0NzksImV4cCI6MjA1OTI2NDQ3OX0.Ku31hOWhz7DqZvU_4OebseErHpG0XXSxi_77JcqGXxA";
};

const AWS_KEY = 'AKIAIOSFODNN7EXAMPLEVUTE';

export function getAwsConfig() {
    return AWS_CONFIG;
}
