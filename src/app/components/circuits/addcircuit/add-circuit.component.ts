import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthService } from './../../../services/service-auth.service';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-add-circuit',
  templateUrl: './add-circuit.component.html',
  styleUrls: ['./add-circuit.component.css']
})
export class AddCircuitComponent {
  addCircuitForm: FormGroup<any> = new FormGroup({});
  param: any
  public userId: string = '';
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private Router: Router,
    private serviceAuthService: ServiceAuthService,private userStore: UserStoreService) { }
  data = {
    titre: "zaghouan-camp",
    description: "azeazeazezaezaeazeaeazeaeaze",
    lieu: "zaghouan",
    lieustination: "tunis",
    dateDebut: null,
    dateFin: null,
    temps: null,
    tarif: 1564655,
    circuit_image: null
  }
  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('param')!;
    console.log(this.param);
    this.getId();
    
    this.addCircuitForm = this.fb.group({
      titre: [null, Validators.required],
      description: [null],
      lieuDedepart: [null, Validators.required],
      destination: [null, Validators.required],
      dateDebut: [null, Validators.required],
      duree: [null, [Validators.required, Validators.min(1)]],
      prix: [null, Validators.required],
      nbrPlcae: [null, Validators.required],
      trancheDage: [null, Validators.required],
    });
    if (this.param == "modifierCercuits") {
      console.log(this.data);
      this.addCircuitForm.patchValue(this.data)
    }
  }
  async loadImageFromAssets(): Promise<string> {
    const imagePath = './../../assets/images/img/logo-icon.png';
    const response = await fetch(imagePath);
    const blob = await response.blob();
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = () => {
        const base64Data = reader.result as string;
        resolve(base64Data);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  }
  cercuitImage: any
  async onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log('Selected file:', file);

      this.cercuitImage = await this.loadCompanyLogo(file)
      console.log("this.cercuitImage", this.cercuitImage);

    }
  }
  async loadCompanyLogo(file: any): Promise<string | undefined> {
    try {
      const data = file;
      console.log("exists", data);
  
      // Create a FileReader instance
      const reader = new FileReader();
  
      // Create a Promise to handle the asynchronous loading
      const loadImagePromise = new Promise<string | undefined>((resolve, reject) => {
        reader.onload = () => {
          const imageProfile = reader.result as string;
          console.log(imageProfile);
          resolve(imageProfile); // Resolve the Promise with the loaded image data
        };
  
        reader.onerror = (error) => {
          reader.abort();
          reject(error); // Reject the Promise if there's an error
        };
  
        // Start loading the file
        reader.readAsDataURL(data);
      });
  
      // Wait for the Promise to resolve and return the loaded image data
      return await loadImagePromise;
  
    } catch (error) {
      console.error('Error loading company logo:', error);
      return undefined; // Return undefined if there's an error
    }
  }
  async saveCercuits() {
    if (this.addCircuitForm.valid) {
      console.log(this.addCircuitForm.value);
      let dataToAdd = this.addCircuitForm.value

      let transformedData = {
        ...dataToAdd,
       agence: this.userId
      };
console.log(transformedData);

      this.serviceAuthService.postData('/circuits/create', transformedData).then((responce) => {
        console.log("responce", responce);
        this.Router.navigate(['/circuits']);
      });
    }
     else {
      this.addCircuitForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }

  getFormControl(controlName: string) {
    return this.addCircuitForm.get(controlName);
  }
  getId() {
    this.userStore.getIdFromStore().subscribe((id) => {
      let userIdFromToken = this.serviceAuthService.getIdFromToken();
      this.userId = id || userIdFromToken;
      
    });
  }
}
