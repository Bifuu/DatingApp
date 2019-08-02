import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { TouchSequence } from 'selenium-webdriver';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  images: GalleryItem[];

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });

    this.images = this.getImages();
  }

  getImages() {
    const imageUrls = [];
    // for (let i = 0; i < this.user.photos.length; i++) {
    //   imageUrls.push({
    //     small: this.user.photos[i].url,
    //     medium: this.user.photos[i].url,
    //     big: this.user.photos[i].url,
    //     description: this.user.photos[i].description
    //   });
    // }
    for (const photo of this.user.photos) {
      imageUrls.push(new ImageItem({ src: photo.url, thumb: photo.url }));
    }
    return imageUrls;
  }
}
