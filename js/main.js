function loadPage(){
   var template = $('#template').html();
   var rendered = Mustache.render(template, data);
   $('#target').html(rendered);
}
var data = {
   usersFavourite:[
      {
         userName:'Carolyn Campbell',
         userIcon:'images/6AA2859B.jpg',
         userLink:'http://example.com/6AA2859B'
      },
      {
         userName:'Jeniffer Carpenter',
         userIcon:'images/6AA2859C.jpg',
         userLink:'http://example.com/6AA2859C'
      },
      {
         userName:'Jeffrey Walters',
         userIcon:'images/6AA2859D.jpg',
         userLink:'http://example.com/6AA2859D'
      },
      {
         userName:'Beverly Harris',
         userIcon:'images/6AA2859F.jpg',
         userLink:'http://example.com/6AA2859F'
      }
   ],
   usersA:[
      {
         userName:'Anita Cloud',
         userIcon:'images/9B192632.jpg',
         userLink:'http://example.com/9B192632'
      },
      {
         userName:'Stephany Merphy',
         userIcon:'images/9B19263E.jpg',
         userLink:'http://example.com/9B19263E'
      },
      {
         userName:'Tony Payet',
         userIcon:'images/9B192630.jpg',
         userLink:'http://example.com/9B192630'
      },
      {
         userName:'Anny Mary',
         userIcon:'images/9B192631.jpg',
         userLink:'http://example.com/9B192631'
      }
   ],
   usersB:[
      {
         userName:'Jimmy Tulip',
         userIcon:'images/6AA28585.jpg',
         userLink:'http://example.com/6AA28585'
      },
      {
         userName:'Bowie Derek',
         userIcon:'images/9B192633.jpg',
         userLink:'http://example.com/9B192633'
      },
      {
         userName:'Cliff Roddy',
         userIcon:'images/9B192636.jpg',
         userLink:'http://example.com/9B192636'
      },
      {
         userName:'Scott Tennant',
         userIcon:'images/9B192637.jpg',
         userLink:'http://example.com/9B192637'
      }
   ]
};