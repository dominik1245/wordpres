<?php get_header(); ?>

<div class="container">

    <!-- Навігація -->
    <nav class="main-nav">
        <input type="checkbox" id="burger-toggle" class="burger-menu-toggle">
        <label for="burger-toggle" class="burger-menu-icon">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <div class="nav-items">
            <a href="#" class="nav-item">ГОЛОВНА</a>
            <a href="#about" class="nav-item">ПРО КНИГУ</a>
            <a href="#reviews" class="nav-item">ВІДГУКИ</a>
            <a href="#order" class="nav-item">КУПИТИ</a>
        </div>
    </nav>

    <!-- Hero Section -->
<!-- Hero Section -->
<section class="hero" 
    style="background-image: url('<?php echo esc_url( get_field('hero_background') ); ?>');
        
           width: 100%;
           background-size: cover;
           background-position: center;
           background-repeat: no-repeat;">
    <div class="hero-content">
        <h1 class="hero-title"><?php echo get_field("hero_title"); ?></h1>
        <div class="hero-text">
            <p class="txt">
                <?php echo get_field("hero_text_1"); ?>
            </p>
            <p class="txt">
                <?php echo get_field("hero_text_2"); ?>
            </p>
            <p class="txt">
                <?php echo get_field("hero_text_3"); ?>
            </p>
            <p class="txt">
                <?php echo get_field("hero_text_4"); ?>
            </p>
        </div>
        <a href="<?php echo esc_url( get_field("cta_button") ); ?>" class="cta-button">
            <?php echo get_field("cta_button_text"); ?>
        </a>
    </div>
</section>


    <!-- Hunt Section -->
    <section id="hunt" class="hunt-section">
        <h2 class="section-title"><?php echo get_field("hunt_title"); ?></h2>
        <div class="hunt-grid">
            <div class="hunt-card">
                <div class="hunt-number">1</div>
                <p class="hunt-text"><?php echo get_field("hunt_text_1"); ?></p>
            </div>
            <div class="hunt-card">
                <div class="hunt-number">2</div>
                <p class="hunt-text"><?php echo get_field("hunt_text_2"); ?></p>
            </div>
            <div class="hunt-card">
                <div class="hunt-number">3</div>
                <p class="hunt-text"><?php echo get_field("hunt_text_3"); ?></p>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <h2 class="section-title"><?php echo get_field("about_title"); ?></h2>
        <div class="about-content">
            <p class="about-text"><?php echo get_field("about_description"); ?></p>
            <img src="<?php echo esc_url( get_field("about_image") ); ?>" alt="Book Scene" class="about-image">
        </div>
    </section>

    <section id="reviews" class="reviews-section">
    <h2 class="section-title"><?php echo get_field("reviews_title"); ?></h2>
    <div class="reviews-grid">
        
        <?php 
        // --- ПЕРША ГРУПА (Repeater reviews_list) ---
        if( have_rows('reviews_list') ):
            while( have_rows('reviews_list') ): the_row();
                $image = get_sub_field('review_img');
                $name = get_sub_field('review_name');
                $text = get_sub_field('review_text');
                ?>
                <div class="review-card">
                    <img src="<?php echo esc_url($image); ?>" alt="" class="review-image">
                    <h3 class="review-name"><?php echo esc_html($name); ?></h3>
                    <p class="review-text"><?php echo esc_html($text); ?></p>
                </div>
            <?php endwhile;
        endif;
        ?>

        <?php 
        // --- ДРУГА ГРУПА (list_2) ---
        if( have_rows('list_2') ):
            while( have_rows('list_2') ): the_row();
                $image = get_sub_field('photo_2');
                $name = get_sub_field('name_2');
                $text = get_sub_field('reviews_2');
                ?>
                <div class="review-card">
                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="review-image">
                    <h3 class="review-name"><?php echo esc_html($name); ?></h3>
                    <p class="review-text"><?php echo esc_html($text); ?></p>
                </div>
            <?php endwhile;
        endif;
        ?>

        <?php 
        // --- ТРЕТЯ ГРУПА (list3) ---
        if( have_rows('list3') ):
            while( have_rows('list3') ): the_row();
                $image = get_sub_field('photo_3');
                $name = get_sub_field('name_3');
                $text = get_sub_field('reviews_3');
                ?>
                <div class="review-card">
                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="review-image">
                    <h3 class="review-name"><?php echo esc_html($name); ?></h3>
                    <p class="review-text"><?php echo esc_html($text); ?></p>
                </div>
            <?php endwhile;
        endif;
        ?>

        <?php 
        // --- ЧЕТВЕРТА ГРУПА (якщо є, наприклад list4) ---
        if( have_rows('list4') ):
            while( have_rows('list4') ): the_row();
                $image = get_sub_field('photo_4');
                $name = get_sub_field('name_4');
                $text = get_sub_field('reviews_4');
                ?>
                <div class="review-card">
                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="review-image">
                    <h3 class="review-name"><?php echo esc_html($name); ?></h3>
                    <p class="review-text"><?php echo esc_html($text); ?></p>
                </div>
            <?php endwhile;
        endif;
        ?>

        </div>
    </section>




<?php get_footer(); ?>
