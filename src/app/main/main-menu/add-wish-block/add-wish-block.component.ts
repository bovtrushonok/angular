import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishesService } from '../../../services/wishes.service';
import { WishcardModalComponent } from '../../main-page/main-page-content/wish-card/wishcard-modal/wishcard-modal.component';

@Component({
  selector: 'app-add-wish-block',
  templateUrl: './add-wish-block.component.html',
  styleUrls: ['./add-wish-block.component.scss']
})
export class AddWishBlockComponent {

  constructor(public wishService: WishesService, private dialog: MatDialog) { }

  public openWishCardModal(): void {
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
