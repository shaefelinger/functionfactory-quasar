import PageHome from "pages/PageHome.vue"
import PageAbout from "pages/PageAbout.vue"
import PageProjects from "pages/PageProjects.vue"
import PageContact from "pages/PageContact.vue"

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { 
        path: "", 
        // component: () => import("pages/PageHome.vue"), 
        component: PageHome 
      },
      {
        path: "/about",
        // component: () => import("pages/PageAbout.vue")
        component: PageAbout
      },
      {
        path: "/projects",
        // component: () => import("pages/PageProjects.vue")
        component: PageProjects
      },
      {
        path: "/contact",
        // component: () => import("pages/PageContact.vue")
        component: PageContact
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
