var img_path = "/img/bg-img/4.jpg"
var link = "https://google.com"
var name = "FirstName LastName"

let cp_info = [
    {
        name :  'Dr.K.Balaveera Reddy',
        image_path : '/chief_patrons/chairman.jpg',
        email : '#',
        linkedin : '#',
        designation : 'Chairman BOG'
    }, 
    {
        name :  'Prof. Karanam Umamaheshwar Rao',
        image_path : '/chief_patrons/Director.jpg',
        email : 'director@nitk.ac.in',
        linkedin : 'https://www.linkedin.com/in/k-umamaheshwar-rao-623a4373',
        designation : 'Director'
    }
]

let patron_info = [
    {
        name :  'Prof. Ananthanarayana V.S.',
        image_path : '/patrons/anvs.jpg',
        email : 'dydirector@nitk.edu.in',
        linkedin : '#',
        designation : 'Deputy Director'
    },
    {
        name :  'Prof. A. Nityananda Shetty',
        image_path : '/patrons/ANS.jpg',
        email : 'deanacademic@nitk.edu.in',
        linkedin : '#',
        designation : 'Dean Academic'
    },
    {
        name :  'Prof. K. Panduranga Vittal',
        image_path : '/patrons/kpv1.jpg',
        email : 'deanaair@nitk.edu.in',
        linkedin : 'https://in.linkedin.com/pub/dr-panduranga-vittal-k/19/541/43a',
        designation : 'Dean Alumni Affairs and Institutional Relations'
    },
    {
        name :  'Prof. Aloysius Henry Sequeira',
        image_path : '/patrons/ahs.jpg',
        email : 'ahs@nitk.ac.in',
        linkedin : '#',
        designation : 'Dean Faculty Welfare'
    },
    {
        name :  'Prof. Subhash C. Yaragal',
        image_path : '/patrons/subhas.jpg',
        email : 'dean_pd@nitk.edu.in',
        linkedin : '#',
        designation : 'Dean Planning & Development'
    },
    {
        name :  'Prof. U. Shripathi Acharya',
        image_path : '/patrons/sripathi.png',
        email : 'dean.rc@nitk.edu.in',
        linkedin : '#',
        designation : 'Dean Research & Consultancy'
    },
    {
        name :  'Prof. Jagannath Nayak',
        image_path : '/patrons/jagannath.jpg',
        email : 'jagan@nitk.ac.in',
        linkedin : '#',
        designation : 'Dean Students Welfare'
    },
    {
        name :  'Prof. Ashvini Chaturvedi',
        image_path : '/patrons/ashv.png',
        email : 'ashvini@nitk.ac.in',
        linkedin : '#',
        designation : 'Associate Dean'
    },
    {
        name :  'Prof. Vidya Shetty K',
        image_path : '/patrons/vidyashetty.jpg',
        email : 'vidyaks95@nitk.ac.in',
        linkedin : '#',
        designation : 'Associate Dean'
    }
]

let fac_info = [
    {
        name: 'Dr. Sowmya Kamath S.',
        image_path : '/fac-ads/sk-image.jpg',
        email: 'sowmyakamath@nitk.edu.in',
        linkedin: '#',
        designation: 'Assistant Professor'
    },
    {
        name: 'Dr. Anand Kumar M.',
        image_path : '/fac-ads/anandkumar.png',
        email: 'm_anandkumar.nitk.edu.in',
        linkedin: '#',
        designation: 'Assistant Professor'
    },
    {
        name: 'Dr. Suprabha K. R.',
        image_path : '/fac-ads/suprabha-k-r-image.jpg',
        email: 'suprabha@nitk.ac.in',
        linkedin: '#',
        designation: 'Assistant Professor'
    }
]
function insert_in_div(insert_div,persons){
    persons.forEach((person)=> {
        div_text = `
            <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                <!-- Thumb -->
                <div class="speaker-single-thumb">
                    <img src="/img/team_page`+ person.image_path + `" alt="">
                </div>
                <!-- Social Info -->
                <div class="social-info">
                    <a href="`+ person.email + `"><i class="zmdi zmdi-email"></i></a>
                    <a href="`+ person.linkedin + `"><i class="zmdi zmdi-linkedin"></i></a>
                </div>
                <!-- Info -->
                <div class="speaker-info">
                    <h5>` + person.name + `</h5>
                    <p style="color:gold">` + person.designation+ `<p>
                </div>
            </div>
            </div>
            `
            insert_div.innerHTML+= div_text
    })
}

var cp_div = document.getElementById('cp').getElementsByClassName('row')[0]
insert_in_div(cp_div,cp_info)

var patron_div = document.getElementById('p').getElementsByClassName('row')[0]
insert_in_div(patron_div,patron_info)

var fac_div = document.getElementById('facad').getElementsByClassName('row')[0]
insert_in_div(fac_div,fac_info) 

// var cp_div = document.getElementById('cp').getElementsByClassName('row')[0]
// insert_in_div(cp_div,cp_info)
