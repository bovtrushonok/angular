import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishesService } from '../services/wishes.service';
import { WishcardModalComponent } from '../wishcard-modal/wishcard-modal.component';

@Component({
  selector: 'app-add-wish-modal',
  templateUrl: './add-wish-modal.component.html',
  styleUrls: ['./add-wish-modal.component.scss']
})
export class AddWishModalComponent {

  constructor(public wishService: WishesService, private dialog: MatDialog) { }

  public openWishCardModal():void {
    const dialogRef = this.dialog.open(WishcardModalComponent, {
      width: '30%',
      height: '370px',
      panelClass: 'wish-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.wishService.addNewWish(result);
    });
  }

}
