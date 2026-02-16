export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  date: string;
  readTime?: string;
  title: string;
  excerpt: string;
  link: string;
  image: string;
  isAffiliate?: boolean;
  content?: string; // HTML or Markdown content
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "visokoproteinski-dorucak-za-energiju-cijeli-dan",
    category: "Recepti",
    date: "30.12.2024.",
    readTime: "3 min čitanja",
    title: "Visokoproteinski doručak za energiju cijeli dan",
    excerpt: "Kako započeti dan s 30g proteina u manje od 5 minuta pripreme.",
    link: "/blog/visokoproteinski-dorucak-za-energiju-cijeli-dan",
    image: "/blog/visokoproteinski-dorucak-za-energiju-cijeli-dan.jpg",
    content: `
        <p class="lead">Doručak je najvažniji obrok u danu - kliše koji si čuo tisuću puta. Ali ako treniraš, to nije samo kliše, to je činjenica. Kvalitetan doručak postavlja ton za ostatak dana, stabilizira šećer u krvi i osigurava amino kiseline potrebne za oporavak mišića nakon noćnog posta.</p>
        
        <h2>Zašto proteini ujutro?</h2>
        <p>Većina ljudi ujutro jede ugljikohidrate (kruh, žitarice, pekarski proizvodi). To dovodi do naglog skoka inzulina, nakon kojeg slijedi pad energije oko 11 sati. Unosom proteina i zdravih masti osiguravaš stabilnu razinu energije i dulji osjećaj sitosti.</p>
        
        <h3>Sastojci</h3>
        <ul>
          <li>3 jaja (L veličina)</li>
          <li>100g zrnatog sira</li>
          <li>Šaka špinata</li>
          <li>1 kriška integralnog tosta</li>
          <li>Maslinovo ulje za pečenje</li>
        </ul>

        <h3>Priprema</h3>
        <ol>
          <li>Zagrij tavu na srednje jakoj vatri s malo maslinovog ulja.</li>
          <li>Umuti jaja sa zrnatim sirom (ovo je tajna kremoznosti i dodatnih proteina!).</li>
          <li>Dodaj špinat u tavu da povene, zatim ulij smjesu jaja.</li>
          <li>Peci uz lagano miješanje dok jaja nisu gotova po tvojoj želji.</li>
          <li>Posluži uz tost.</li>
        </ol>
        
        <div class="highlight-box">
          <p>💡 <strong>INFO:</strong> Ovaj obrok sadrži cca <strong>450 kalorija i 35g proteina</strong>. Savršen start za svakoga tko želi izgraditi mišiće ili zadržati sitost tijekom dijete.</p>
        </div>
      `
  },
  {
    id: 5,
    slug: "kreatin-mitovi-istine",
    category: "Suplementacija",
    date: "29.12.2024.",
    title: "Kreatin: Mitovi, istine i zašto ga moraš koristiti",
    excerpt: "Nije steroid. Nije opasan. Saznaj zašto je ovo broj 1 suplement za snagu.",
    link: "https://spin2sport.com/proizvod/spin-basic-kreatin/",
    image: "/blog/kreatin-mitovi-istine.jpg",
    isAffiliate: true,
  },
  {
    id: 2,
    slug: "najcesce-greske-kod-cucnja",
    category: "Trening",
    date: "28.12.2024.",
    title: "Najčešće greške kod čučnja (i kako ih popraviti)",
    excerpt: "Čučanj je kralj vježbi, ali samo ako ga radiš pravilno. Evo 3 ključna tipsa.",
    link: "/blog/najcesce-greske-kod-cucnja",
    image: "/blog/najcesce-greske-kod-cucnja.jpg",
    content: `
        <p class="lead">Čučanj je kompleksna vježba koja uključuje gotovo svaki mišić u tijelu. No, zbog te kompleksnosti, vrlo je lako pogriješiti. Loša forma ne samo da smanjuje efikasnost vježbe, već drastično povećava rizik od ozljede.</p>

        <h2>1. Podizanje peta</h2>
        <p>Ako ti se pete odižu od poda dok se spuštaš, to je znak smanjene mobilnosti gležnja ili lošeg balansa. Težina ti se prebacuje na prste, što stvara ogroman stres na koljena.</p>
        <p><strong>Rješenje:</strong> Radi na mobilnosti gležnja ili koristi tenisice za dizanje utega (s povišenom petom). Pokušaj gurati kroz pete.</p>

        <h2>2. Urušavanje koljena (Knee Valgus)</h2>
        <p>Kada se dižeš iz čučnja, koljena ti "padaju" prema unutra. Ovo je najčešće znak slabog gluteusa.</p>
        <p><strong>Rješenje:</strong> Aktivno guraj koljena prema van tijekom cijelog pokreta. Zamisli da stopalima pokušavaš "razderati" pod.</p>

        <h2>3. Nedovoljna dubina</h2>
        <p>Polučučnjevi daju polurezultate. Ako ne ideš barem do paralele (kukovi u ravnini s koljenima), ne aktiviraš u potpunosti gluteus i zadnju ložu.</p>
        <p><strong>Rješenje:</strong> Smanji kilažu i radi na tehnici. Bolje savršen čučanj s 60kg nego polučučanj sa 100kg.</p>
        
        <div class="highlight-box">
             <p>⚠️ <strong>NAPOMENA:</strong> Ako osjećaš bol u donjem dijelu leđa, provjeri da li radiš "wink" (podvlačenje zdjelice) na dnu pokreta. Održi core čvrstim i kralježnicu neutralnom.</p>
        </div>
        `
  },
  {
    id: 3,
    slug: "kako-ostati-dosljedan",
    category: "Lifestyle",
    date: "25.12.2024.",
    title: "Kako ostati dosljedan kad ti se ne da",
    excerpt: "Motivacija je prolazna. Disciplina je ono što donosi rezultate.",
    link: "/blog/kako-ostati-dosljedan",
    image: "/blog/kako-ostati-dosljedan.jpg",
    content: `
        <p class="lead">Svi imamo dane kad nam se ne da. Kad je vani hladno, kad smo umorni od posla, kad bi radije gledali seriju. Razlika između onih koji postižu rezultate i onih koji odustaju nije u tome da prvi imaju više motivacije. Razlika je u tome što oni treniraju i kad im se ne da.</p>

        <h2>Motivacija vs. Disciplina</h2>
        <p>Motivacija je emocija. Kao i svaka emocija, ona dođe i prođe. Ne možeš se osloniti na nju. Disciplina je navika. To je sposobnost da uradiš ono što trebaš, bez obzira na to kako se osjećaš.</p>

        <h3>Trikovi za izgradnju discipline</h3>
        
        <h4>1. Smanji trenje</h4>
        <p>Pripremi torbu za trening večer prije. Odaberi gym koji ti je usput. Što je manje prepreka između tebe i treninga, veća je šansa da ćeš ga odraditi.</p>

        <h4>2. Pravilo 5 minuta</h4>
        <p>Reci sebi: "Otići ću samo 5 minuta". Najteži dio je doći tamo. Jednom kad si u gymu, vjerojatno ćeš odraditi cijeli trening.</p>

        <h4>3. Prati napredak</h4>
        <p>Zapisuj treninge. Kad vidiš kako brojke rastu, to ti daje dodatni poticaj da ne prekineš niz (streak).</p>

        <p>Zapamti: Jedan loš trening je bolji od propuštenog treninga.</p>
        `
  },
  {
    id: 6,
    slug: "whey-protein-vodic",
    category: "Suplementacija",
    date: "22.12.2024.",
    title: "Whey Protein: Vodič za početnike",
    excerpt: "Koji odabrati? Isolat ili koncentrat? Najbolji omjer cijene i kvalitete na Spin2Sport.",
    link: "https://spin2sport.com/proizvod/spin-protein-shake-kakao-1kg/",
    image: "/blog/whey-protein-vodic.jpg",
    isAffiliate: true,
  },
  {
    id: 4,
    slug: "post-workout-shake",
    category: "Recepti",
    date: "20.12.2024.",
    title: "Post-workout shake koji zapravo ima dobar okus",
    excerpt: "Zaboravi na grudice i loš okus proteina. Ovo je game changer.",
    link: "/blog/post-workout-shake",
    image: "/blog/post-workout-shake.jpg",
    content: `
        <p class="lead">Šejk poslije treninga ne mora biti muka za popiti. Uz pravu kombinaciju sastojaka, može biti nagrada kojoj se veseliš cijeli trening.</p>

        <h2>Zašto shake poslije treninga?</h2>
        <p>Nakon intenzivnog treninga, tvoje zalihe glikogena su ispražnjene, a mišićna vlakna oštećena. Tijelo treba brze ugljikohidrate za energiju i proteine za popravak.</p>

        <h3>Recept: Choco-Banana Power</h3>
        <p>Ovaj shake je savršen omjer proteina i ugljikohidrata.</p>

        <ul>
            <li>1 mjerica Whey Proteina (Čokolada)</li>
            <li>1 zrela banana (smrznuta je još bolja!)</li>
            <li>200ml bademovog mlijeka (ili vode)</li>
            <li>1 žličica kikiriki maslaca</li>
            <li>Par kockica leda</li>
        </ul>

        <p>Priprema je jednostavna: Sve u blender na 30 sekundi i uživaj!</p>
        
        <p><strong>Savjet:</strong> Ako želiš dodatne kalorije (za masu), dodaj zobene pahuljice. Ako paziš na kalorije, izbaci kikiriki maslac.</p>
        `
  },
];
