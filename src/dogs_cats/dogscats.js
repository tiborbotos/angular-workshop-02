export default class DogsCatsComponent {
  static create() {
    return {
      template: require('./dogscats.html'),
      controller: DogsCatsComponent,
    };
  }

  constructor() {
    this.cats = ['https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn',
      'https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg',
      'https://cdn.britannica.com/67/197567-131-1645A26E.jpg',
      'https://hackernoon.com/hn-images/1*mONNI1lG9VuiqovpnYqicA.jpeg',
      'https://i.ytimg.com/vi/mcYnMbJwFCA/maxresdefault.jpg',
      'https://s3.amazonaws.com/bncore/wp-content/uploads/2017/01/Ocelot.jpg',
      'https://amyshojai.com/wp-content/uploads/2015/03/KittenFace_2186038_original.jpg',
      'https://resc-files-74.s3.us-west-1.amazonaws.com/s3fs-public/styles/large/public/2018-12/Abandoned-kitten-johnson-canyon-ferals-04531_1.jpg?itok=oaFGa-r7',
      'https://cdn2.lamag.com/wp-content/uploads/sites/6/2018/05/DUSTYKITTY.jpg',
      'https://images.pexels.com/photos/290204/pexels-photo-290204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ];

    this.dogs = ['https://media2.s-nbcnews.com/j/newscms/2018_20/1339477/puppy-cute-today-180515-main_a936531048fdb698635dd1b418abdee9.fit-760w.jpg',
      'https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg',
      'https://cdn.shopify.com/s/files/1/1885/2557/articles/puppy_in_blanket_1000x_89d7b434-6214-4bd3-81bf-64249531b15e_1000x.jpg?v=1524209094',
      'https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/PuppyFT2-1024x683.jpg',
      'https://i0.wp.com/s3.amazonaws.com/wmfeimages/wp-content/uploads/2018/09/27182802/4189366235_060e3e8e6f_z.jpg?fit=640%2C480&ssl=1',
      'https://i.pinimg.com/originals/74/53/25/7453256386ad622a42e33571885505d8.jpg',
      'https://news.nationalgeographic.com/content/dam/news/2018/05/16/puppy-peak-cuteness/01-puppy-peak-cuteness-NationalGeographic_2283134.ngsversion.1526498130056.adapt.1900.1.jpg',
      'https://www.thesprucepets.com/thmb/UQZKhUaKItAlsAuso1SJDqVEnfs=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/two-puppies-playing-in-garden-83315112-5accabf7875db90036766acf.jpg',
      'https://www.dogster.com/wp-content/uploads/2017/08/A-happy-puppy-lying-in-the-grass-outside.jpg',
      'https://images.pexels.com/photos/1938125/pexels-photo-1938125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ];

    this.currentCat = 'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    this.currentDog = 'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

    this.inGameCats = [];
    this.inGameDogs = [];

    this.round = 0;
    this.catCounter = 0;
    this.dogCounter = 0;

    this.started = false;
    this.result = '';
  }

  onCatClick() {
    this.catCounter++;
    console.log('cat clicked, counter: ' + this.catCounter);
    this.inGame();
  }

  onDogClick() {
    this.dogCounter++;
    console.log('dog clicked, counter:  ' + this.dogCounter);
    this.inGame();
  }

  selectingCats() {
    for (let i = 0; i < 5; i++){
      // this.inGameCats.push(this.cats[Math.floor(Math.random() * this.cats.length)]);
      this.inGameCats.push(this.cats[i]);
    }
  }

  selectingDogs() {
    for (let i = 0; i < 5; i++){
      // this.inGameDogs.push(this.dogs[Math.floor((Math.random() * this.dogs.length))]);
      this.inGameDogs.push(this.dogs[i]);
    }
  }

  onStart() {
    this.inGameCats = [];
    this.inGameDogs = [];
    this.round ++;
    this.shuffle(this.cats);
    this.shuffle(this.dogs);

    this.selectingCats();
    this.selectingDogs();

    this.currentCat = this.inGameCats[0];
    this.currentDog = this.inGameDogs[0];
    this.started = true;
  }

  inGame(){
    if (this.round < 5){
      this.round ++;
      this.currentCat = this.inGameCats[this.round - 1];
      this.currentDog = this.inGameDogs[this.round - 1];
    } else if (this.round >= 5){
      this.onEnd();
      this.started = false;
    }
  }

  onEnd() {
    if (this.catCounter > this.dogCounter){
      console.log('more cats liked');
      this.result = 'cat person';
    } else if (this.dogCounter > this.catCounter) {
      console.log('more dogs liked');
      this.result = 'dog person';
    } else {
      console.log('same cats and dogs liked');
      this.result = 'you like dogs and cats equally';
    }
    this.round = 0;
    this.started = false;
    this.catCounter = 0;
    this.dogCounter = 0;
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
