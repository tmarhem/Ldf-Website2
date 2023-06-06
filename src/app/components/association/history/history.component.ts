import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  fragment: any;
  entries: any = [{
    date: '1363',
    description: `Le roi de France Jean II le Bon donne le duché de Bourgogne à son plus jeune fils, Philippe le 
    Hardi ; il devient le premier des grands ducs de Bourgogne l’année suivante.`
  },
  {
    date: '1369',
    description: `Philippe le Hardi épouse Marguerite de Male, héritière des comtés de Flandre, de Nevers, de 
    Rethel, d’Artois et de Bourgogne.`
  },
  {
    date: '1404',
    description: `Mort de Philippe le Hardi, avènement de son fils Jean sans Peur. `
  },
  {
    date: '1407',
    description: `Jean sans Peur fait assassiner le duc d’Orléans à Paris pour prendre le contrôle du conseil 
    royal`
  },
  {
    date: '1415',
    description: `Naissance de Pierre de Roubaix, à Herzelles.`
  },
  {
    date: '1419',
    description: `Meurtre du duc Jean sans Peur, à Montereau, par le parti armagnac. Avènement de son fils, 
    Philippe le Bon. Rapprochement entre les Bourguignons et les Anglais`
  },
  {
    date: 'Jan 1430',
    description: `Fondation de l’ordre de la Toison d’or. Jean de Roubaix, père de Pierre, en devient
    membre`
  },
  {
    date: '1433',
    description: `Philippe le Bon acquiert les comtés de Hainaut, Hollande et Zélande. `
  },
  {
    date: '1435',
    description: `Traité d’Arras, marquant la réconciliation entre Bourguignons et Français. Pierre de Roubaix 
    épouse à Gand, Marguerite de Ghistelles, du Breucq et de Wasquehal, héritière de l’une des plus
    anciennes et nobles familles de Flandre`
  },
  {
    date: '1443',
    description: `Philippe le Bon prend possession du duché du Luxembourg.
    `
  },
  {
    date: '7 Juin 1449',
    description: `Mort de Jean de Roubaix, Pierre lui succède alors à la tête de la seigneurie. `
  },
  {
    date: '1452 - 1463',
    description: `Pierre de Roubaix fait le pèlerinage à Jérusalem et à Rome ( date indeterminée )`
  },
  {
    date: '1461',
    description: `Mort du roi Charles VII et avènement du dauphin Louis XI.`
  },
  {
    date: '1465',
    description: `Début de la guerre du Bien Public qui oppose Charles (futur Téméraire), alors comte du 
    Charolais à Louis XI pour lui contester la Picardie. Le 3 octobre, Pierre de Roubaix participe à la prise 
    de Péronne. Le 5 octobre, le traité de Conflans restitue les villes de la Somme et du comté de 
    ¨Ponthieu à Charles`
  },
  {
    date: 'Août 1466',
    description: `Pierre de Roubaix participe à la prise de la ville de Dinant, alors révoltée contre les 
    Bourguignons.`
  },
  {
    date: '15 Juin 1467',
    description: `Mort de Philippe le Bon à Bruges, à 71 ans. Charles le Téméraire lui succède à la tête du 
    duché`
  },
  {
    date: '1467-68',
    description: `Pierre de Roubaix participe au siège de Saint-Trond, à la bataille de Brustein et au siège de 
    Liège en compagnie du Téméraire`
  },
  {
    date: '1468',
    description: `Reprise de la guerre franco-bourguignonne après que Louis XI ai déclaré nul le traité de 
    Conflans`
  },
  {
    date: '1er Novembre 1469',
    description: `Pierre de Roubaix obtient du duc Charles un privilège de draperie pour sa ville.`
  },
  {
    date: 'Juillet 1471',
    description: `Ordonnance bourguignonne créant une armée permanente constituée de compagnies. `
  },
  {
    date: '1475',
    description: `Charles le Téméraire assiège et prend Nancy, forçant le duc de Lorraine René II, qui coupe le 
    passage entre les possessions méridionales et septentrionales du duc de Bourgogne, à s’exiler. 
    Entrée en guerre des Bourguignons contre les Bernois et leurs alliés pour le contrôle de la route des 
    Alpes. `
  },
  {
    date: '1476',
    description: `Défaites bourguignonnes à Grandson (mars) puis à Morat (juin) contre les confédérés suisses. 
    En août, la Lorraine se soulève contre les Bourguignons et Charles met le siège devant Nancy en 
    octobre. `
  },
  {
    date: '5 Janvier 1477',
    description: `Charles le Téméraire meurt devant Nancy. Louis XI récupère alors le duché de 
    Bourgogne, privant Marie de Bourgogne d’une partie de sa succession et l’obligeant à trouver une 
    alliance avec Maximilien I
    er de Habsbourg, futur empereur du Saint Empire qu’elle épouse. Pierre de 
    Roubaix reste fidèle à Marie malgré les ravages des Français sur les terres flamandes. `
  },
  {
    date: '1482',
    description: `Mort de Marie de Bourgogne, suite à un accident de chasse. `
  },
  {
    date: '1488',
    description: `Pierre de Roubaix décide de se retirer dans son château et s’occupe des fondations pieuses et 
    d’œuvres de charité.`
  },
  {
    date: '1491',
    description: `Pierre de Roubaix fonde la Compagnie des Arbalétriers de la ville.`
  },
  {
    date: '7 Juin 1498',
    description: `Mort de Pierre de Roubaix ; à l’âge de 83 ans.`
  }
];

  constructor(public route: Router){ }


   ngOnInit(): void {
    document.querySelector('#timeline-content').scrollIntoView();
   }



}
