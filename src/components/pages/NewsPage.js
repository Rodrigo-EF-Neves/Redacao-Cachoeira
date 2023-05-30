import styles from './NewsPage.module.css';

function NewsPage() {
    return (
        <section className={styles.newspage_container}>
            <div className={styles.news_header}>
                <h2>Jogos da Libertadores da América</h2>
                <h4>Todos os jogos da semana e horários</h4>
            </div>
            <div className={styles.author_name}>
                <p><span>Fulano da Silva</span> 30/05/2023</p>
                <hr className={styles.horizontal_line}/>
            </div>
            <div className={styles.news_body}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis posuere neque. Suspendisse nec sem semper, lobortis nisi eget, suscipit neque. Morbi eu gravida tellus. Sed et iaculis lorem. Integer fermentum massa vitae lacus tristique, ac luctus neque feugiat. Curabitur feugiat turpis mi, non consequat augue varius id. Phasellus a diam elit. Pellentesque nec eros molestie, pulvinar est quis, pellentesque nunc.</p>
                
                <p>Duis viverra commodo varius. Suspendisse potenti. Morbi velit sapien, scelerisque vitae dictum eu, efficitur mattis ex. Ut vitae libero egestas dolor ultricies dictum. Curabitur tempus tellus ac metus eleifend egestas. Nulla interdum vestibulum rhoncus. Ut pellentesque, orci vel facilisis commodo, risus augue bibendum sapien, quis mattis mi nibh non metus. Sed venenatis laoreet mi, id interdum nibh luctus nec. Suspendisse malesuada quam a nibh ullamcorper sodales. Etiam mollis augue nec odio dignissim, eu molestie ex tempor. Etiam feugiat quam ut justo placerat, eu porta tortor condimentum. Sed ut leo mattis, ultricies purus et, lacinia nisl. Suspendisse felis dui, tempor scelerisque orci sed, congue dignissim enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam et nunc viverra, feugiat enim vel, laoreet sapien.</p>
            </div>
        </section>
    )
}

export default NewsPage;