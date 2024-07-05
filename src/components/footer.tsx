export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex flex-col gap-4 p-4">
        <p>
          © 2024 - Copyright kkoouuya, All Rights Reserved.
        </p>
        <p>
          このサイトは Google Analytics
          を使用しています。詳しくは
          <a
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            className="hover:opacity-75 underline"
          >
            Google
            のサービスを使用するサイトやアプリから収集した情報の
            Google による使用 – ポリシーと規約
          </a>
          をご覧ください。
        </p>
      </div>
    </footer>
  );
}
