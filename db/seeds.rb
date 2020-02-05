course = Course.create(title:  "Organic Gardening ", description: "Video library of gardening tips for organic gardening")

 section = Section.create(title: "Let's Get Started", description: "How to get started on your organic garden", course:  course)

episodes= Episode.create([
        {
             title: "In the Beginning ",
            description: "Planning the garden location",
            url: "https://youtu.be/lYAREY6iJqU?t=15",
            section: section
        },

        {
            title: "The Soil",
            description: "Prepare for Planting",
            url: "https://youtu.be/vQrKKmYUh6E",
            section: section
        },

        {
            title: "Seeds and Seedlings",
            description:"How to choose your plants",
            url: "https://youtu.be/FclnKgCi_Ws",
            section: section
        },

        {
            title: "Garden Pests",
            description: 'Watch out for these buggers! ',
            url: "https://youtu.be/--JYSpBz-Qo",
            section: section
        },

        {
            title: "Harvest Plants",
            description: "Are your plants ready for harvest?",
            url: "https://youtu.be/w6Bh_ziTtNw",
            section: section
        }
])