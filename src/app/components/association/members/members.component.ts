import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor() { }

  importPrefix = '../../../../assets/images/'
  
  people = [ 
  {
    name: 'Pierre de Roubaix',
    subName: '1415-1498',
    title: 'Seigneur',
    picture: 'pierre-roubaix.jpg',
    story: `<p>
    Né à Herzelles le 1er août 1415, il succède à son père, Jean de Roubaix, à la tête de la
    seigneurie, à 34 ans, en 1449. Marié à Marguerite de Ghistelles, dame de Broeucq et de
    Wasquehal, il est le père d’Isabeau de Roubaix, née en 1434.
    Il va faire bâtir à Roubaix une superbe demeure entourée de murailles et d’une double enceinte
    de fossés, pour remplacer la vieille tourelle familiale, avant d’entreprendre un pèlerinage en
    Terre Sainte pendant plus d’un an, entre les années 1452 et 1463. Au retour, il passe par le
    royaume de Chypre et l’île de Rhodes ; il se rend également au pays du prince de Tarente, et
    de là, à Naples, où il est reçu par le roi, puis à Rome pour rencontrer le Saint-Père. A son
    retour il fait construire l’église du St Sépulcre à Roubaix, copié sur le modèle de celle de
    Jérusalem.
  </p>
  <p>
    En tant que conseiller et chambellan des ducs Philippe le Bon et Charles le Téméraire, Pierre
    de Roubaix prend part à toutes les campagne militaires que ces princes mènent alors. Après la
    bataille de Montlhéry qui oppose le comte du Charolais, futur Charles le Téméraire, aux troupes
    de Louis XI, en 1465, il se voit confier l’ordre de garder la ville de Bray-sur-Somme (Picardie). Il
    accompagne ensuite le Charolais jusqu’à Dinant, ville révoltée contre la Bourgogne, et assiste
    au saccage de la ville. Chargé de garder l’une des portes, il prend une riche part du butin fait
    lors du pillage de la ville par d’autres.
    Il va également assister au siège de Saint-Trond et à la bataille de Brustein, en 1467, aux côtés
    du Téméraire, puis à la prise de Liège l’année suivante. Cette fidélité au duc lui vaut d’être
    récompensé par l’obtention, le 1er
    novembre 1469, du droit de « drapper » à Roubaix.
  </p>
    <p>
      Après la mort du Téméraire lors du siège de Nancy, le 5 janvier 1477, Pierre de Roubaix entre
      dans le conseil supérieur, composé de 22 membres, pour aider la jeune Marie de Bourgogne,
      alors âgée de 19 ans et unique héritière du duché, à administrer les Etats Bourguignons. Pierre
      de Roubaix deviendra chambellan du duc Maximilien d’Autriche, époux de Marie, après la mort
      de celle-ci lors d’une chasse au héron, le 27 mars 1482, restant ainsi fidèle à la Bourgogne
      jusqu’au bout de sa vie.
    </p>`
  },
  {
    name: 'Martin Guerre',
    subName: '1408-1477',
    title: 'Sergent',
    picture: 'martin.jpg',
    story: `<p>
    Martin Guerre le fils de l'essarteur passa son enfance dans un village du Nord de la France. Les gens qui l'ont connu à cette époque parlent d'un jeune homme doux et souriant. Un caractère très contrasté avec celui du molosse qui l'accompagnait partout. Un chien aux aboiements féroces qui passait son temps à se battre, manger et à dormir.
    Quand la famine survint, elle s'abattit sur le village avec la même hargne que la petite vérole sur le bas clergé. Le père mourut de la fièvre et la mère disparu dans des conditions mystérieuses. Rapidement la ferme fut récupérée par un oncle peu scrupuleux. Martin disparu alors une première fois. Le bruit courut qu'il s'était enrôlé au service de Jean de Roubaix vassal du duc de Bourgogne.
    </p><p>Des années plus tard les gens du pays dirent avoir revu un homme qui prétendait être Martin. Un sergent d'arme, qui semblait avoir fait fortune au service du jeune Pierre de Roubaix. La guerre l'avait probablement changé, ce Martin là aboyait des ordres et proférait des jurons à faire rougir les nones, et quand il ne buvait pas, se battait. 
    L'oncle refusa catégoriquement de reconnaitre l'identité de Martin affirmant que la famine aidant il avait probablement été dévoré par son propre chien. L affaire ne fut jamais vraiment dénouée. Enrichi par son seigneur qui lui offrit l'une de ses cousines en épousailles, Martin Guerre ne réclama jamais la ferme familiale. De son côté, l'oncle finit par cesser ses allégations concernant l'identité de son neveu. 
    Martin disparut une deuxième fois lors de la débâcle de Nancy. Si l'oncle de Martin était alors décédé depuis longtemps, au village on se demandait toujours si Martin ne pourrait pas à nouveau réapparaître.
      </p>`
  },
  {
    name: 'Adélaïde de Oignies',
    subName: '1410-1477',
    title: 'Sergent',
    picture: 'adelaide.jpg',
    story: `<p>
    Adélaïde de Oignies Née au cœur du St empire Romain Germanique. Une région marécageuse où les hospitaliers se sont implantés. Une région avec de nombreux Hérons dont la famille Czaplicka a fait son emblème. 
    Lointaine cousine de Pierre de Roubaix, Adélaïde fut mariée une première fois à un roturier. Elle apporte en dote une maison fortifiée et des terres sur Oignies. </p><p>A la mort de son époux, elle refuse de repartir dans le St empire pour y être remariée ou enfermée dans un couvent. Dans un premier temps elle se cache au milieu de des hommes d'armes du seigneur de Roubaix. Finalement découverte elle négocie un accord peu conventionnel avec son cousin.  Adélaïde a pris goût à la vie de camp l'insolence des soldats et leur liberté de ton. Pierre de Roubaix de son côté compte bien faire d'une pierre deux coups. Elle pourra porter les armes le jour et les robes d'apparat le soir à deux conditions. Veiller sur l'impétueuse fille de son cousin, Isabeau de Roubaix et épouser le sergent d'armes Martin Guerre. 
          </p>`
  },
  {
    name: 'Yvan Durosel',
    subName: 'dit Fleur de Lotus',
    title: 'Soldat',
    picture: 'lotus.jpg',
    story: `<p>
    Second fils d'une famille de vilain. Yvan prend la décision de quitter les siens suite
    à l'incendie de leur ferme. Alors âgé de 15 ans, il va passer un temps parmi des
    traînes-patins qui l’amèneront à effectuer quelques actes de brigandage et il
    continuera dans cette voie , effectuant divers larcins dans les villages avoisinants.
</p>
<p>
    Jusqu'en 1465 où suite à la bataille de Montlhéry, Yvan comptait dépouiller les
    cadavres des possessions dont ils n'auraient plus l'utilité. Il croisa alors Aslain,
    son frère cadet, qui faisait partit des gardes chargés d'empêcher que de tels actes
    ne soient commis.
</p>
<p>
    Yvan se lassa convaincre par son jeune frère d'abandonner cette vie peu
    honorable et de rejoindre les troupes du Seigneur Pierre de Roubaix avec
    lesquelles il était en garnison non loin, à Bray-sur-Somme.
    Yvan accepta et fit preuve d'adresse en entraînement, ce qui l'amena à suivre les
    enseignement du meilleur sergent d'armes du Seigneur de Roubaix, Martin
    Guerre.
</p>`
  },
  {
    name: 'Quentin La Bourde',
    subName: 'dit Bouffe-Tout',
    title: 'Soldat',
    picture: 'Bouffetout.jpg',
    story: `<p>
    Quentin La Bourde dit Bouffe-Tout (1425-1477)
    Né à Ancoisne en 1425, dans l’un des fiefs tenus par les de Roubaix, au sein
    d’une famille de paysans, Quentin La Bourde est très vite mis à l’écart par sa
    famille qui le voit comme une bouche à nourrir inutile devant sa fainéantise. A 12
    ans, il est envoyé au service des de Roubaix en tant que servant de cuisine.
  </p>
  <p>
    Ayant été surpris à plusieurs reprises en train de se repaitre dans le garde-
    manger seigneurial, il obtient alors le sobriquet de Bouffe-Tout ! Pour réparer ses
  </p>
  <p>
    fautes, il est contraint de rejoindre les rangs des troupes seigneuriales, d’abord
    comme servant d’artillerie, puis comme épéiste, pensant qu’il serait peut-être
    meilleur à ce poste. Malgré ses piètres performances à l’épée, il suit de Roubaix
    dans tous ses déplacements et il devient le « goûteur » officiel de celui-ci,
    domaine où il excelle !
  </p>`
  },
  {
    name: 'Blanche Duhamel',
    subName: 'dit La Braise',
    title: `Dame d'honneur`,
    picture: 'virginie.jpg',
    story: `<p>
    Blanche Duhamel vit le jour en 1425 dans une famille bourgeoise à Calais. Son père est un ambitieux tisserand qui
a pris une lombarde pour épouse, Maria. Femme pieuse et dévouée, elle lui donnera en tout huit enfants : six fils et
deux filles. Alors qu’elle a tout juste quatorze ans, Marguerite, la petite soeur de Blanche prend le voile. Cette
dernière cependant est très loin de suivre les pas des femmes de sa famille. Bien plus intéressée par les affaires
de son père que par celles de sa mère, elle rechigne à prendre un mari. Elle finira néanmoins par épouser un parti
que lui a dégotté son père outre-mer : un bourgeois anglais, ayant ses entrées auprès de l’aristocratie locale. Elle y
rencontre notamment Viviane d’Harrow.
</p>
<p>
Deux ans plus tard, le mari de Blanche trouve la mort dans un duel courtois, sans avoir eu la bonne idée de mettre sa femme enceinte. Ne prenant pas le temps de se lamenter,
Blanche rassemble autant d’affaires qu’elle peut pour retourner en France où elle entre au service de Lady Viviane
en tant que dame d’honneur.
</p>`
  },
  {
    name: `Viviane d'Harrow`,
    subName: '1403-1477',
    title: 'Noble',
    picture: 'elaine.jpg',
    story: `<p>
    Lors d’une ambassade en Angleterre, mené par Gillebert de Lannoy, oncle de
Pierre de Roubaix, Viviane d’Harrow, alors dame de compagnie de la reine
d’Angleterre, fait la connaissance de son futur mari, Hugues de Lannoy, frère de
Gillebert. Le mariage a lieu en 1424, à Londres, en présence du roi Henri VI
d’Angleterre.
</p>
<p>
    Après son mariage, elle embarque pour la Flandre avec son mari. A la mort de ce
dernier, alors qu’il accompagne Pierre de Roubaix en pèlerinage en Terre Sainte,
vers 1455, celui-ci se sent dans l’obligation de s’occuper de sa tante Viviane.
Celle-ci l’accompagne alors dans ses voyages militaires où elle occupe son temps
en exerçant ses talents de brodeuse et de couturière.
</p>`
  },
  {
    name: 'Aslain Durosel',
    subName: '1440-1525',
    title: 'Soldat',
    picture: 'aslain-durosel.jpg',
    story: `<p>Fils de vilain, il est recueilli par de Roubaix, à 12 ans, après l’incendie de la ferme
    familiale. Ce dernier le prend alors sous son aile et en fait son écuyer. On lui
    apprend alors à lire et à écrire en latin. Il devient quasiment le fils que de Roubaix
    n’a jamais eu et, par jalousie, les hommes de la troupe le surnomme « Le
    Mignon ».</p>
    <p>De Roubaix le forme personnellement au rudiment des armes, et en particulier au
    maniement de l’arc. Il le suit alors dans tous ses déplacements.
    Alors qu’il est en garnison, avec de Roubaix, à Bray-sur-Somme, en 1465, après
    la bataille de Montlhéry, il y retrouve son frère, disparu 13 ans plus tôt lors de
    l’incendie de la ferme familiale, et parvient à le convaincre de rejoindre les troupes
    de son seigneur.</p>`
  },
  {
    name: 'Jehan de Fleury',
    subName: '?????-????',
    title: 'Soldat',
    picture: 'jehan.jpg',
    story: `
    <p>Jehan de Fleury est originaire du comté de Hainaut et plus précisément de Fleury.</p>
    <p>Il s’ennuie à travailler dans les champs et aux fourneaux, ou à exécuter les basses œuvres de la famille. Il n’est pas l’aîné (il a 2 frères et 1 sœur), n’a pas droit aux honneurs et se retrouve toujours au second plan (même sur les gravures de famille). « Fleury, c’est un peu comme la prison », écrira ce poète dans ses mémoires. Cette maxime ne tombera pas dans l’oreille d’un sourd.</p>
    <p>Alors que c’est à l’aîné que doit revenir l’héritage familial, Jehan est envoyé par ses parents dans un monastère pour servir Dieu. C’est là qu’il apprend à lire et à écrire, mais les saintes écritures le laissent de marbre. « Du soir au matin, ça brassait de la bière, mais surtout du vent », se remémore Jehan, qui dévore en cachette les récits antiques dissimulés dans la réserve monastique. Le mythe de la Toison d’Or lui réchauffe le cœur.</p>
    <p>Il rêve de grandes aventures, de découvertes, de combats épiques et d’amours passionnés. Aussi, lorsque la compagnie des Lions de Flandre, menée par Pierre de Roubaix, passe à proximité du bourg, il n’hésite pas, quitte la bure et la bière et déclare à la famille : « Si c’est ça, je file à Roubaix ».</p>
    <p>Jehan apprend le maniement des armes à la dure et découvre l’âpre vie des camps. Il est empli de bonne volonté, mais sa maladresse caractérisée lui attire les remontrances régulières du dizainier, qui le gratifie souvent d’un « Alors toi, t’es un comique, troupier ».</p>
    <p>Il ne laissera certes pas une trace indélébile dans l’Histoire, à l’instar de son homonyme Jean (Jehan) de Roubaix – ce  qui l’amènera à conclure, toujours dans ses mémoires : « Je me suis un peu retrouvé Gros-Jehan, comme devant » – mais son courage, son ardeur et sa bonhommie auront permis d’accroître la renommée de la troupe.</p>
    <p>Et quelle jolie troupe.</p>
    `
  }
  ]
    
    ngOnInit() {
      document.querySelector('#membresTop').scrollIntoView();
      console.log('test', this.people)
    }
}
