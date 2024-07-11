import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthService } from 'src/app/services/service-auth.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
interface Circuit {
  _id:number;
  titre: string;
  description: string;
  lieuDedepart: string;
  destination: string;
  dateDebut: string;
  duree: number;
  prix: number;
  circuit_image: string;
  trancheDage: number;
}
@Component({
  selector: 'app-edit-circuit',
  templateUrl: './edit-circuit.component.html',
  styleUrls: ['./edit-circuit.component.css']
})
export class EditCircuitComponent {
  editCircuitForm: FormGroup<any> = new FormGroup({});
  param: any
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private Router: Router,
    private serviceAuthService: ServiceAuthService,private dialogRef: MatDialog, @Inject(MAT_DIALOG_DATA) public circuit: Circuit) { }
  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('param')!;
    console.log(this.param);

    this.editCircuitForm = this.fb.group({
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
    
      console.log(this.circuit);
      this.editCircuitForm.patchValue(this.circuit)
      console.log(this.editCircuitForm.value)
    
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
    if (this.editCircuitForm.valid) {
      console.log(this.editCircuitForm.value);
      let dataToAdd = this.editCircuitForm.value

      let transformedData = {
        ...dataToAdd,
       // circuit_image: this.cercuitImage
      };
console.log(transformedData);
      
      this.serviceAuthService.putData('/circuits/updateCircuit/'+this.circuit._id, transformedData).then((responce) => {
        console.log("responce", responce);
        this.Router.navigate(['/espace_agence']);
        this.close()
        
      });
    }
     else {
      this.editCircuitForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }

  getFormControl(controlName: string) {
    return this.editCircuitForm.get(controlName);
  }
  close() {
    let dialog = this.dialogRef.getDialogById('editCircuit');
    dialog?.close();
  }
}


