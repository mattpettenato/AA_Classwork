class ArtworkSharesController < ApplicationController

  
  
  def create
    artworkshare = ArtworkShare.new(artworkshare_params)
    if artworkshare.save
      render json: artworkshare
    else
      render json: artworkshare.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    artworkshare = ArtworkShare.find(params[:id])
    artworkshare.destroy
    render json: artworkshare
  end

  private

  def artworkshare_params
    params.require(:artworkshare).permit(:artwork_id, :viewer_id)
  end
end