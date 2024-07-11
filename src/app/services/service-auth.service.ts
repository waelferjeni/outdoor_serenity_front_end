import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http'; import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {
  private ApiUrl: string = "http://localhost:4000";
  private userPayload: any;
  constructor(private http: HttpClient,private router: Router) { 
    this.userPayload = this.decodedToken();
  }


  postData(url: any, body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.ApiUrl}${url}`, body, { headers, responseType: 'text', withCredentials: true })
      .toPromise()
      .then((response: any) => {
        try {
          return JSON.parse(response);
        } catch {
          return response;
        }
      })
      .catch((error: any) => {
        console.error('Error during HTTP request:', error);
        throw error;
      });
  }
  putData(url: any, body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.ApiUrl}${url}`, body, { headers, responseType: 'text', withCredentials: true })
      .toPromise()
      .then((response: any) => {
        try {
          return JSON.parse(response);
        } catch {
          return response;
        }
      })
      .catch((error: any) => {
        console.error('Error during HTTP request:', error);
        throw error;
      });
  }
  getData(RequestUrl: String) {
    const headers = new HttpHeaders()
    return this.http
      .get(this.ApiUrl + RequestUrl, { headers: headers })
      .toPromise()
      .then((response) => response as any);
  }
  getCircuitsByAgenceId(agenceId: string): Promise<any> {
    return this.http.get<any>(`${this.ApiUrl}/circuits/ByAgence/${agenceId}`).toPromise();
  }
  deleteCircuitById(id: string): Promise<any> {
    return this.http.delete<any>(`${this.ApiUrl}/circuits/${id}`).toPromise();
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['connexion']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  decodedToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token);
  }
  getIdFromToken() {
    if (this.userPayload) {
      return this.userPayload.id;
    }
  }
  // getFullNameFromToken() {
  //   if (this.userPayload) {
  //     return this.userPayload.name;
  //   }
  // }
  getRoleFromToken() {
    if (this.userPayload) {
      return this.userPayload.role;
    }
  }
  // tokenExpires() {
  //   return this.http.get<any>(`${this.baseURL}token`);
  // }
 
}

