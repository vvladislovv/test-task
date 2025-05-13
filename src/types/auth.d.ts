interface RegistrationData {
  email: string;
  username: string;
  password: string;
}

interface ValidationResult {
  success: boolean;
  errors?: Array<{ field: string; message: string }>;
  data?: RegistrationData;
}
