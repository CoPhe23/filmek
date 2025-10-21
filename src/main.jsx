import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from 'react-query'
      const MyqueryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
      <QueryClientProvider client={MyqueryClient}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </QueryClientProvider>
)
