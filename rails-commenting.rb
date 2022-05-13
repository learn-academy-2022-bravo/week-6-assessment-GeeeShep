# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)created a class called BlogPostController which is inheriting from parent class Application controller
class BlogPostsController < ApplicationController
  def index
    # ---2)declaring instance variable @post and assigning it to call on items in the entire data base,by making it an instance variable to be called of the index method.
    @posts = BlogPost.all
  end

  # ---3) created a method called show to find the post defined in the param
  def show 
    @post = BlogPost.find(params[:id])
  end

  # ---4) create a method called new and assigns a new post when called upon 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) given an instance variable to create bp params for the database if @post is valid. if valid the create method will return the object 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)created a method called edit, that tells rails to edit the post that has the id in the params defined.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) assigning the instance variable @post to update blogpostparams for Blogpost db if @post is valid. if so the update will returnthe object and save it to the db.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)using else to take me to the hom page if the post is destroyed and if it does not exist it will redirect to find a valid id number 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private method to tellruby here on out this encapsulated area is off limits
  private
  def blog_post_params
    # ---10) this is specifically looking at blog_post model  and within that permitting access to the title 
    params.require(:blog_post).permit(:title, :content)
  end
end
