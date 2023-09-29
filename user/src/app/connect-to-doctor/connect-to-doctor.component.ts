import { Component } from '@angular/core';

@Component({
  selector: 'app-connect-to-doctor',
  templateUrl: './connect-to-doctor.component.html',
  styleUrls: ['./connect-to-doctor.component.css']
})
export class ConnectToDoctorComponent {
  originalDoctors = [
    { name: 'Dr. Nancy', picture: '../../assets/Doctor-images/Doctor_1.jpg', specialization: 'Pediatric Dermatologist', experience: 2, price: 300, rating: 4.5 },
    { name: 'Dr. Shreya', picture: '../../assets/Doctor-images/Doctor_2.jpg', specialization: 'Surgical Dermatologist', experience: 11, price: 400, rating: 4.7 },
    { name: 'Dr. Yash', picture: '../../assets/Doctor-images/Doctor_3.jpg', specialization: 'Pediatric Dermatologist', experience: 8, price: 500, rating: 4.1 },
    { name: 'Dr. Rohit', picture: '../../assets/Doctor-images/Doctor_4.jpg', specialization: 'Allergist-Immunologist', experience: 2, price: 250, rating: 4.2 },
    // Add more dummy data as needed
  ];

  doctors = [...this.originalDoctors];  // Create a copy for initial display

  searchText = '';
  selectedFilter = 'name';

  searchDoctors() {
    if (!this.searchText) {
      // If search text is empty, reset the doctors array
      this.resetDoctors();
      return;
    }

    // Convert search text to lowercase for case-insensitive search
    const searchTextLower = this.searchText.toLowerCase();

    // Filter doctors based on the selected filter
    this.doctors = this.originalDoctors.filter(doctor => {
      switch (this.selectedFilter) {
        case 'name':
          return doctor.name.toLowerCase().includes(searchTextLower);
        case 'rating':
          return doctor.rating.toString().includes(searchTextLower);
        case 'experience':
          return doctor.experience.toString().includes(searchTextLower);
        default:
          return false;
      }
    });

    // Sort doctors based on the selected filter
    this.sortDoctors();
  }

  sortDoctors() {
    switch (this.selectedFilter) {
      case 'name':
        this.doctors = this.doctors.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        this.doctors = this.doctors.sort((a, b) => b.rating - a.rating);
        break;
      // Add more cases for other filters if needed
    }
  }

  resetDoctors() {
    // Reset the doctors array to the original state
    this.doctors = [...this.originalDoctors];
  }
}
