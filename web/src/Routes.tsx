// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout} prerender>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/gameplay" page={GameplayPage} name="gameplay" />
        <Route path="/newsletter" page={NewsletterSignUpPage} name="newsletterSignUp" />
        <Route path="/rules" page={RulesPage} name="rules" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
