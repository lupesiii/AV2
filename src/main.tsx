import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import BlurProvider from "./providers/blurProvider.tsx";
import ItemProvider from "./providers/itemProvider.tsx";
import UserProvider from "./providers/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<StrictMode>
			<UserProvider>
				<BlurProvider>
					<ItemProvider>
						<App />
					</ItemProvider>
				</BlurProvider>
			</UserProvider>
		</StrictMode>
	</BrowserRouter>,
);
