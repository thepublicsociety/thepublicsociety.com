module ApplicationHelper
  def title
      base_title = "The Public Society"
      if @title.nil?
        base_title
      else 
        "#{@title} :: #{base_title}"
      end
    end
    def metatag
      base_desc = "the public society"
      if @metatag.nil?
        base_desc
      else 
        "#{@metatag}"
      end
    end
    def bgimg
      default = "/public/images/missingbg.png"
      if @bgimg.nil?
        default
      else
        "#{@bgimg}"
      end
    end
    def bgheight
      baseh = 1024
      if @bgheight.nil?
        baseh
      else
        "#{@bgheight}"
      end
    end
    def bgwidth
      basew = 768
      if @bgwidth.nil?
        basew
      else
        "#{@bgwidth}"
      end
    end
    
    def bgimg2
      default = "/public/images/missingbg.png"
      if @bgimg2.nil?
        default
      else
        "#{@bgimg2}"
      end
    end
    def bgheight2
      baseh = 1024
      if @bgheight2.nil?
        baseh
      else
        "#{@bgheight2}"
      end
    end
    def bgwidth2
      basew = 768
      if @bgwidth2.nil?
        basew
      else
        "#{@bgwidth2}"
      end
    end
    def bgimg3
      default = "/public/images/missingbg.png"
      if @bgimg3.nil?
        default
      else
        "#{@bgimg3}"
      end
    end
    def bgheight3
      baseh = 1024
      if @bgheight3.nil?
        baseh
      else
        "#{@bgheight3}"
      end
    end
    def bgwidth3
      basew = 768
      if @bgwidth3.nil?
        basew
      else
        "#{@bgwidth3}"
      end
    end
    def bgimg4
      default = "/public/images/missingbg.png"
      if @bgimg4.nil?
        default
      else
        "#{@bgimg4}"
      end
    end
    def bgheight4
      baseh = 1024
      if @bgheight4.nil?
        baseh
      else
        "#{@bgheight4}"
      end
    end
    def bgwidth4
      basew = 768
      if @bgwidth4.nil?
        basew
      else
        "#{@bgwidth4}"
      end
    end
    def bgimg5
      default = "/public/images/missingbg.png"
      if @bgimg5.nil?
        default
      else
        "#{@bgimg5}"
      end
    end
    def bgheight5
      baseh = 1024
      if @bgheight5.nil?
        baseh
      else
        "#{@bgheight5}"
      end
    end
    def bgwidth5
      basew = 768
      if @bgwidth5.nil?
        basew
      else
        "#{@bgwidth5}"
      end
    end
    
    def pphotos
      basep = []
      if @pphotos.nil?
        basep
      else
        @pphotos
      end
    end
end
