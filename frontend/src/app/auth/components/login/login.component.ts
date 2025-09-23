

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;
//   successMessage: string | null = null;
//   errorMessage: string | null = null;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(8),
//           Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)
//         ]
//       ]
//     });
//   }

//   get username() { return this.loginForm.get('username'); }
//   get password() { return this.loginForm.get('password'); }

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       this.successMessage = 'Login successful!';
//       this.errorMessage = null;
//       console.log('Login Data:', this.loginForm.value);
//     } else {
//       this.errorMessage = 'Please fill out all fields correctly.';
//       this.successMessage = null;
//       this.loginForm.markAllAsTouched();
//     }
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
// import { RegistrationComponent } from '../registration/registration.component';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;
//   successMessage: string | null = null;
//   errorMessage: string | null = null;

//   constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(8),
//           Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)
//         ]
//       ]
//     });
//   }

//   get username() { return this.loginForm.get('username'); }
//   get password() { return this.loginForm.get('password'); }

//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       const loginData = this.loginForm.value;

//       this.authService.login(loginData).subscribe({
//         next: (res) => {
//           this.successMessage = 'Login successful!';
//           this.errorMessage = null;
//           localStorage.setItem('token', res.token);  // store token if available
//           this.router.navigate(['/mediconnect']);   // navigate after login
//         },
//         error: () => {
//           this.errorMessage = 'Login failed. Please try again.';
//           this.successMessage = null;
//         }
//       });
//     } else {
//       this.errorMessage = 'Please fill out all fields correctly.';
//       this.successMessage = null;
//       this.loginForm.markAllAsTouched();
//     }
//   }
// }









import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)
        ]
      ]
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  // onSubmit(): void {
  //   if (this.loginForm.invalid) {
  //     this.errorMessage = "Please fill in valid credentials.";
  //     return;
  //   }
  
  //   const { username, password } = this.loginForm.value;
  
  //   this.authService.login(username, password).subscribe({
  //     next: (res) => {
  //       this.successMessage = "Login successful!";
  //       this.errorMessage = "";
  
  //       // Save token if returned
  //       if (res && res.token) {
  //         localStorage.setItem("token", res.token);
  //       }
  
  //       // Navigate to dashboard (or wherever)
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error: () => {
  //       this.errorMessage = "Login failed. Please try again";
  //       this.successMessage = "";
  //     },
  //   });
  // }



  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log("Login Success:", res);
          // save token if backend returns one
          localStorage.setItem('token', res.token);
        },
        error: (err) => {
          console.error("Login failed:", err);
          this.errorMessage = "Login failed. Please try again.";
        }
      });
    }
  }
  
  
}
