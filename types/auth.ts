export interface User {
  id: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
}

export interface RandomUserApiResponse {
  results: Array<{
    name: User['name'];
    email: User['email'];
    phone: User['phone'];
    picture: User['picture'];
    location: User['location'];
    login: {
      uuid: string;
    };
  }>;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginFormData {
  phoneNumber: string;
}
