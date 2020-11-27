// array of artists
const artists = ['Stam1na', 'Carach Angren', 'Oingo Boingo', 'Sun Kil Moon', 'The Alan Parsons Project']

//array of diff albums from each artists
const stam1naAlbums = ['Raja', 'Elokuutio']
const carachAngrenAlbums = ['Dance and Laugh Amongst The Rotten', 'This Is No Fairytale']
const oingoBoingoAlbums = [`Dead Man's Party`]
const sunKilMoonAlbums = ['Benji', 'Ghosts of the Great Highway']
const theAlanParsonsProjectAlbums = ['Eye In The Sky']

// array of diff songs in diff albums

const raja = ['Hammasratas', 'Susi-ihminen', 'Muistipalapelit', 'Vartijaton', 'Voima Vastaan Viha', 'Lääke', 'Kädet Vasten Lastia', 'Luova Hulluus', 'Muuri', 'Murtumispiste', 'Yhdeksän Tien Päät']
const elokuutio = ['Ikoneklasmia', 'Elokuutio', 'Meidänkaltaisillemme', 'Pala Palalta', 'Pienet Vihreät Miehet', 'Mätä Hohtava Omena', 'D.S.M', 'Marttyyri', 'Kuudet Raamit', 'Valhe'];

const danceAndLaugh = ['Opening', 'Charlie', 'Blood Queen', 'Charles Francis Coghlan', 'Song for the Dead', 'In De Naam Van De Duivel', 'Pitch Black Box', 'The Pocession Process', 'Three Times Thunder Strikes'];
const fairytale = ['Once Upon a Time...', `There's No Place Like Home`, 'When Crows Tick On Windows', 'Two Flies Flew into a Black Sugar Cobweb', 'Dreaming of a Nightmare in Eden', 'Possessed by a Craft of Witchery', 'Killed and Served by the Devil', 'The Witch Perished in Flames', 'Tragedy Ever After']

const deadMan = ['Just Another Day', `Dead Man's Party`, 'Heard Someone Cry', 'No One Lives Forever', 'Stay', `Fool's Paradise`, 'Help Me', 'Some Man I was Before', 'Weird Science']

const benji = ['Carissa', `I Can't Live Without My Mother's Love`, 'Truck Driver', 'Dogs', 'Pray for Newtown', 'Jim Wise', 'I Love My Dad', 'I Watched The Film The Song Remains The Same', 'Richard Ramirez Died Today of Natural Causes', 'Micheline', `Ben's My Friend`]
const ghosts = ['Glenn Tipton', 'Carry Me Ohio', 'Salvador Sanchez', 'Last Tide', 'Floating', 'Gentle Moon', 'Lily and Parrots', 'Duk Koo Kim', 'Si, Paloma', 'Pancho Villa', 'Somewhere', 'Arrival']

const eye = ['Sirius', 'Eye In The Sky', 'Children of the Moon', 'Gemini', 'Silence and I', `You're Gonna Get Your Fingers Burned`, 'Psychobabble', 'Step by Step', 'Old and Wise']


const chooseSong = () =>{
    let artInd = Math.floor(Math.random() * artists.length)
    switch (artInd) {
        case 0:
            let albInd1 = Math.floor(Math.random() * stam1naAlbums.length)
            switch (albInd1) {
                case 0:
                    let songInd1 = Math.floor(Math.random() * raja.length)
                    console.log(`Artist: ${artists[artInd]}, album: ${stam1naAlbums[albInd1]}, song: ${raja[songInd1]}`)
                    break;
                case 1:
                    let songInd2 = Math.floor(Math.random() * raja.length)
                    console.log(`Artist: ${artists[artInd]}, album: ${stam1naAlbums[albInd1]}, song: ${raja[songInd2]}`)
                    break;
                default:
                    break;
            }
            break;
    
        case 1:
            let albInd2 = Math.floor(Math.random() * carachAngrenAlbums.length)
            switch (albInd2) {
                case 0:
                    let songInd3 = Math.floor(Math.random() * danceAndLaugh.length)
                    console.log(`Artist: ${artists[artInd]}, album: ${carachAngrenAlbums[albInd2]}, song: ${danceAndLaugh[songInd3]}`)
                    break;
                case 1:
                    let songInd4 = Math.floor(Math.random() * fairytale.length)
                    console.log(`Artist: ${artists[artInd]}, album: ${carachAngrenAlbums[albInd2]}, song: ${fairytale[songInd4]}`)
                    break;
                default:
                    break;
            }
            break;
        
        case 2:
            let albInd3 = Math.floor(Math.random() * oingoBoingoAlbums.length)
            switch (albInd3) {
                case 0:
                    let songInd5 = Math.floor(Math.random() * deadMan.length)
                    console.log(`Artist: ${artists[artInd]}, album: ${oingoBoingoAlbums[albInd3]}, song: ${deadMan[songInd5]}`)
                    break;
                default:
                    break;
                }
                break;
                
         case 3:
            let albInd4 = Math.floor(Math.random() * sunKilMoonAlbums.length)
            switch (albInd4) {
                case 0:
                    let songInd6 = Math.floor(Math.random() * benji.length)
                    console.log(`Artist: ${artists[artInd]}, album: ${sunKilMoonAlbums[albInd4]}, song: ${benji[songInd6]}`)
                    break;
                case 1:
                    let songInd7 = Math.floor(Math.random() * ghosts.length)
                    console.log(`Artist: ${artists[artInd]}, album: ${sunKilMoonAlbums[albInd4]}, song: ${ghosts[songInd7]}`)
                    break;
                default:
                    break;
                    }
                break;
                           

        case 4:
            let albInd5 = Math.floor(Math.random() * theAlanParsonsProjectAlbums.length)
            switch (albInd5) {
                case 0:
                    let songInd8 = Math.floor(Math.random() * eye.length)
                    console.log(`Artist: ${artists[artInd]}, album: ${theAlanParsonsProjectAlbums[albInd5]}, song: ${eye[songInd8]}`)
                    break;
                default:
                    break;
                    }
                break;
 
        default:
            break;
    }
}

chooseSong()



