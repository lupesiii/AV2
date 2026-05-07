import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import BlurProvider from "./components/blurProvider.tsx";
import ItemProvider from "./components/itemProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<StrictMode>
			<BlurProvider>
				<ItemProvider>
					<App />
				</ItemProvider>
			</BlurProvider>
		</StrictMode>
	</BrowserRouter>,
);
