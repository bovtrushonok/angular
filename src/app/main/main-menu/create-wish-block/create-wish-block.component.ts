import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishesService } from '../../../services/wishes.service';
import { WishcardModalComponent } from '../../main-page/main-page-content/wish-card/wishcard-modal/wishcard-modal.component';

@Component({
  selector: 'app-create-wish-block',
  templateUrl: './create-wish-block.component.html',
  styleUrls: ['./create-wish-block.component.scss']
})
export class CreateWishBlockComponent {

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
