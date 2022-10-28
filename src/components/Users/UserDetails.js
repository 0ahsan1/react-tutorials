{/* <div class="topper">
  <h1>User Details</h1>
</div>
<ng-container *ngIf="User">
  <div class="containerr">
    <div class="profile__edit"><a class="profile__button" routerLink="">Back</a></div>
      <div class="photo">
        <img [src]="User?User.image:''" />
        <p>{{User.firstName+' '+ User.maidenName  +' '+ User.lastName}}</p>
      </div>
      <div class="personal">
        <div>
         <h3>Address</h3>
          <p>{{User.address.address}}</p>
        </div>
        <div>
          <h3>Subscription Plan</h3>
          <p><a href="#">Get Fit Family Pack</a></p>
        </div>
      </div>
      <div class="points">
        <h4>875</h4>
        <p>Power Points</p>
      </div>
      <div class="deal">
        <h3>Card Details</h3>
          <table class="table">
            <tr>
              <td>{{'CARD TYPE' | titlecase}}</td>
              <td>{{User.bank.cardType | uppercase}}</td>
            </tr>
            <tr>
              <td>{{'CARD NUMBER' | titlecase}}</td>
              <td>{{User.bank.cardNumber}}</td>
            </tr>
            <tr>
              <td>{{'CARD IBAN' | titlecase}}</td>
              <td>{{User.bank.iban}}</td>
            </tr>
            <tr>
              <td>{{'CARD EXPIRY' | titlecase}}</td>
              <td>{{User.bank.cardExpire}}</td>
            </tr>
            <tr>
              <td>{{'CURRENCY' | titlecase}}</td>
              <td>{{User.bank.currency | uppercase}}</td>
            </tr>
          </table>
      </div>
      <div class="recent">
        <div>
          <h4>Company Details</h4>
            <ul>
              <li>Name <span> {{User.company.name}}</span></li>
              <li>Title <span> {{User.company.title}}</span></li>
              <li>Department <span> {{User.company.department}}</span></li>
              <li>Phone <span> {{User.phone}}</span></li>
            </ul>
        </div>
      </div>
      <div class="bought">
        <div>
          <h4>Personal Info</h4>
          <ul>
            <li>Birth Date <span> {{User.birthDate | date}}</span></li>
            <li>Age <span> {{User.age}}</span></li>
            <li>Gender <span> {{User.gender | uppercase}}</span></li>
            <li>Email <span> {{User.email}}</span></li>
            <li>University <span> {{User.university}}</span></li>
            </ul>
        </div>
      </div>
  </div>
</ng-container> */}
